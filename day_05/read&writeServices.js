import { read } from "fs";
import fs from "fs/promises";

const readJsonFile = async (path) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    //console.log(data);
    //console.log(typeof(data));
    //console.log(typeof JSON.parse(data));
    //return data;
  } catch (error) {
    console.log("Unable to read file");
  }
};
// const writeJsonFile = async(path,data)=>{
//     try{

//     }
// }
readJsonFile("student.json");
