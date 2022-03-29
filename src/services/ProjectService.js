import axios from "axios";

const BASE_API_URL =
  "https://lucidfinal.herokuapp.com/api/teachers/getProjects";
const BASE_API_URL_APPLY =
  "https://lucidfinal.herokuapp.com/api/teachers/newEntry";

class BookService {
  getAllProjects() {
    // axios
    //   .get("https://lucidfinal.herokuapp.com/api/teachers/getProjects", {})
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    // const projects = axios.get(BASE_API_URL);
    // console.log(projects);
    // projects.forEach((element) => {
    //   console.log(doc.id, "=>", doc.data());
    // });
    // axios.get(BASE_API_URL);
  }

  apply(application) {
    return axios.post(BASE_API_URL_APPLY, application);
  }

  // getBookById(bookId){
  //     return axios.get(BASE_API_URL + '/' + bookId);
  // }

  // updateBook(bookId, book){
  //     return axios.put(BASE_API_URL + '/' + bookId, book);
  // }

  // deleteBook(bookId){
  //     return axios.delete(BASE_API_URL + '/' + bookId);
  // }
}

export default new BookService();
