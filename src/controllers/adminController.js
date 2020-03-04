let adminContoller = {

    main:(req, res)=>{
        res.render('adminProfile');
    },
    signIn:(req, res)=>{
        res.render('adminSignIn');
    },
    logIn:(req, res)=>{
        res.render('adminLogIn');
    }

};

module.exports = adminContoller;