import cv2
import re
from PIL import Image
from pytesseract import image_to_string
import redis

class TextExtraction():
    def __init__(self, filepath: str) -> None:
        # create MSER object
        self.mser: cv2.MSER = cv2.MSER_create()

        try:
            self.img: cv2.Image = cv2.imread(filepath)
            self.imag_obj: Image = Image.open(filepath)
        except FileNotFoundError as f:
            raise FileNotFoundError("INCORRECT_FILEPATH: %s" % filepath)
        
        try:
            self.r: redis.Redis[bytes] = redis.Redis(host='localhost', port=6379, db=0)
        
        except redis.exceptions.AuthenticationError as re:
            re.printStackTrace()

        self.ml_pipe: list = []

    @staticmethod
    def transform_image(image: cv2.Image) -> cv2.Image:
        image: cv2.Image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        _, bw = cv2.threshold(image, 0.0, 255.0, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)
        return bw


    @staticmethod
    def extract_text(bw) -> None:
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (20, 1))
        connected = cv2.morphologyEx(bw, cv2.MORPH_CLOSE, kernel)
        # find all the contours
        contours, _=cv2.findContours(connected.copy(),cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

        return contours
    
    @staticmethod
    def parse_text(image, contours) -> list:
        array_of_texts: list=[]
        for idx in range(len(contours)):
            x, y, w, h = cv2.boundingRect(contours[idx])
            cropped_image = image.crop((x-10, y, x+w+10, y+h ))
            str_store: str = re.sub(r'([^\s\w]|_)+', '', image_to_string(cropped_image))
            array_of_texts.append(str_store)

        return array_of_texts

    def build_cv_pipeline(self) -> None:
        if len(self.pipeline) == 0:
            self.pipeline: list = [self.transform_image, self.extract_text, self.parse_text]
        else:
            print("Pipeline already built")
    
    def build_redis_pipeline(self):
        if self.redis_pipeline is None:
            print("No Redis pipeline intact")
