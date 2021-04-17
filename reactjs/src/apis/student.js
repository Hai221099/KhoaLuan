import {instance} from "./index";

export const getStudentFactory = () => {
    const getStudents = async () => {
        const response = await instance().get("/student");

        if (response.status !== 200 ) {
            // ...
        } 
        return response.data;
    }
    return getStudents;
}

export const addStudentFactory = () => {
    const addStudent = async (a) => {
        const response = await instance().post("/student/create" , a);
        if (response.status !== 200 ) {
            // ...
        } 
       
    }
    return addStudent;
}

export const deleteStudentFactory = () => {
    const deleteStudent = async (a) => {
        const response = await instance().delete("/student/delete" , {id: a});
        if (response.status !== 200 ) {
            // ...
        } 
       
    }
    return deleteStudent;
}

export const editStudentFactory = () => {
    const editStudent = async (a) => {
        const response = await instance().put("/student/update" , a);
        if (response.status !== 201 ) {
            // ...
        } 
       
    }
    return editStudent;
}