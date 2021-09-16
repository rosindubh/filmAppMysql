const command = process.argv[2];

const app = async() => {
    switch(command) {
        case "add":
            const filmObj = {
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5]
            }
        // pass film obj yo addFilm function
        case "list" :
            //find all films from mysql db 

    }
};

app();