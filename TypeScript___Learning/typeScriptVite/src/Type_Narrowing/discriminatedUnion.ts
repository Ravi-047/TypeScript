type SucessResponse = {
    status: "success",
    data: {
        id: string,
        name: string,
    },
}

type ErrorResponse = {
    status: "error",
    errorMessage: string,

}

// type UserAPIResponse = {
//     status: "success" | "error",
//     data?: {
//         id: string,
//         name: string,
//     },
//     errorMessage?: string,
// }

type UserAPIResponse = SucessResponse | ErrorResponse;

function handleResponse(response: UserAPIResponse) {
    if (response.status === "success") {
        console.log(response.data.id);
    } else {
        console.log(response.errorMessage);
    }
}