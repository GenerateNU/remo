package endpoints

import (
	"testing"

	"github.com/huandu/go-assert"
)

func TestBooks(t *testing.T) {
	b := books()

	assert.Equal(t, []Book{
		{
			BookId: "1",
			Title:  "test",
			Author: "test-author",
		},
	}, b)
}
