function sendEmail() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('-qd2NbdU32iUCXa5m');

    var nome = $("#recipient-name").val()
    var emailSend = $("#recipient-email").val()
    var message = $("#message-text").val()

    const templateParams = {
        from_name: nome,
        message: message,
        email: emailSend
    }

    if (nome == "" || emailSend == "" || message == "") {
        let controle = 0;
        $("[class*=required]").each((index, el) => {
            if (el.value == "") {
                $(`#${el.id}`).addClass("danger");
                controle = 1;
            } else {
                $(`#${el.id}`).removeClass("danger");
            }
        })
        if (controle == 1) {
            alert("Preencha todos os campos obrigatórios.");
            return
        }
    }


    emailjs.send('service_wggph4d', 'template_5vu04xj', templateParams, '-qd2NbdU32iUCXa5m').then(function () {
        console.log('SUCCESS!');
        $("#recipient-name").val("")
        $("#recipient-email").val("")
        $("#message-text").val("")



    }, function (error) {
        console.log('FAILED...', error);
    });
};

function clear() {
    $("#recipient-name").val("")
    $("#recipient-email").val("")
    $("#message-text").val("")
    $("[class*=required]").each((index, el) => {
        if (el.value == "") {
            $(`#${el.id}`).removeClass("danger");
        }
    })
}