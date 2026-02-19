import { readJsonFile } from "./read%26writeServices.js";

export const readFile = async (path) => {
    try {
        const data = await fstat.readFile(path, "utf-8");
        data = JSON.parse(data);
    }
}