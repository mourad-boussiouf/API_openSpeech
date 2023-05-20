export const updateLanguage = async (language) => {
    try{
        const body = JSON.stringify({
            language: language,
        })
        await fetch(API_USERS + "/languageUser", {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: (body)
        })
        .then(response => {
            response.json()
            .then(ret => {
                console.log(ret)
                if (response.status !== 200)
                return setError({isError: true, message: ret.message})                                     
                setTimeout(() => {
                    navigation.navigate("ListMessages");
                 }, 1000);
            });
        })
    } 
    catch (error) {
        console.log(error)
    }    
}