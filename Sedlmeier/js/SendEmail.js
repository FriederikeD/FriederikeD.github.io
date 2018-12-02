$(function () {
      $('.SendEmail').click(function (event) {
        var email = 'claudia'+'sedlmeier'+'@'+'web'+'.'+'de';
        var subject = 'Anfrage%20Ferienwohnung';
        document.location = "mailto:"+email+"?subject="+subject;
      });
    });
