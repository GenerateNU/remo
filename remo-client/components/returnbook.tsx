import React from 'react';

export default function ReturnBook({ book }) {
  handleBookValid = (event) => {
    this.setState({ bookId: event.target.value });
  }

  handleReturnBook = (handler) => {
    // TO DO: call some action to actually return the book 
    // and check whether it is actually returned 
    this.setState({
      success: 'Book returned successfully',
      errorMessage: 'Book not properly returned'
    });
  }

  //render() {
    return (
      <div>
        <h1>Return Book</h1>
        <form onSubmit={this.handleReturnBook}>
          <label htmlFor="bookId">Book ID:</label>
          {/* <input type="text" id="bookId" name="bookId" value={this.state.bookId} onChange={this.handleBookIdChange} /> */}
          <button type="submit">Return Book</button>
        </form>
        {this.state.success && <div className="success-message">{this.state.successMessage}</div>}
        {this.state.error && <div className="error-message">{this.state.errorMessage}</div>}
      </div>
    );
  //}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      width: "100%",
      justifyContent: "flex-start",
    },
    next: {
      flex: 1,
      justifyContent: "flex-end",
      paddingLeft: 100,
      marginBottom: 80,
    },
    button: {
      borderRadius: 20,
      width: "100%",
      borderColor: "black",
    },
  });

// export default ReturnBookPage;
