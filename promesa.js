function traerPlantas () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(plantas)
        }, 2000);
    });
};