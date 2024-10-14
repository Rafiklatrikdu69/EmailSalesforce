import FileUploadData from "c/fileUploadData";
import { createElement } from "lwc";

describe("c-file-upload-data", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("TODO: test if web component is null", () => {
    // Arrange
    const element = createElement("c-file-upload-data", {
      is: FileUploadData
    });

    // Act
    document.body.appendChild(element);
    expect(element).not.toBe(null);
  });
});
