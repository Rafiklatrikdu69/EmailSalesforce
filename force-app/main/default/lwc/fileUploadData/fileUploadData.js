import { LightningElement } from "lwc";
import insertC1Excel from "@salesforce/apex/C1_Apex.insertC1Excel";
export default class FileUploadData extends LightningElement {
 async openFileUpload(event) {
    let splitObjectInIndex = [];
    let arrayFinal = [];
    this.template
      .querySelector("lightning-button")
      .addEventListener("click",  async function () {
      
        await new Promise((resolve) =>{
            resolve(console.log('click !'))
        })
        
      });
    const file = event.target.files[0];
    const fileReader = new FileReader();
    arrayFinal = await this.readFile(file,fileReader,splitObjectInIndex,arrayFinal);
    console.log(`arrayFinal = ${arrayFinal.result}`)
    // arrayFinal.result.map((data) => (this.insertC1(data)));
  }
  

  insertC1(data){
    let randomNumber = Math.floor(Math.random() * 90) + 10;
    insertC1Excel({
      Name: data[0] + randomNumber,
      contact: data[1],
      acc: data[2]
    }).then((result) => {
      console.log(result);
    });
  }


  readFile = async (file,fileReader,splitObjectInIndex,arrayFinal) => {
    console.log("hello !")
    const result = await new Promise((resolve) => {
    fileReader.onload = function (e) {
        const content = e.target.result;
        const splitContent = content.split("\n");
        splitObjectInIndex = splitContent.map((data) => data.split(";"));
  
        splitObjectInIndex
          .slice(1, splitObjectInIndex.length)
          .forEach((element) => {
            arrayFinal.push(
              element.slice(0, element.length - 1).map((elm) => {
                return elm.replace(/\s+/g, "");
              })
            );
          });
          console.log(`arrayTest = ${arrayFinal}`)
          resolve({ result: arrayFinal });
      };
      fileReader.readAsText(file);
      
  })
  return result
  }

}
