import axios from "axios";

const api = axios.create({
  baseURL: "http://3.34.236.99:8081/",
});

export const attrApi = {
  getAttrName: (attr) => api.get(`css/main/?attr=${attr}`, {}),
};

export const learningApi = {
  getLearningPageSettings: (attr, pageNo) =>
    api.get(`css/learning/load?attr=${attr}&pageNo=${pageNo}`, {}),

  checkQuizValue: (answers) => api.post(`css/learning/check`, answers, {}),
};
