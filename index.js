
const checkAuth = () => {
    console.log("checking...")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ isAuth: true })
        }, 2000)
    })

}

const getUser = function (authInfo) {
    console.log(authInfo);
    console.log("getting data ...")

    return new Promise((resolve, reject) => {
        if (!authInfo || !authInfo.isAuth) {
            reject(null);
            return;
        }

        setTimeout(() => {
            resolve({ name: "hello" })
        }, 2000)
    })

}

const transformUserData = (user) => {
    console.log(user);
    console.log("Transforming Data ...");
    return new Promise((resolve) => {
        setTimeout(() => {
            user.age = 5;
            resolve(user)
        }, 2000);
    })
}

async function doit() {
    try {
        const info = await checkAuth();
        const user = await getUser(info);
        const data = await transformUserData(user);

        return data;
    }
    catch{
        return "Welcome Error"
    }
}

doit()
    .then(data => {
        console.log(data);
    });
