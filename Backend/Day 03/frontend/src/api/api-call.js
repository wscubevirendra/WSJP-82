const getStudent = async () => {
    try {
        const response = await fetch("http://localhost:5000/student/get-data");
        const student = await response.json()
        if (student.flag === 1) {
            return student.data
        }

    } catch (error) {
        return new error("Internal Server error")

    }

}

export { getStudent }