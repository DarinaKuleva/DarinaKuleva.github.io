
  function checkForm(form)
      {
          if (!document.getElementById('fio').value)
          {
            document.getElementById('err_fio').style.display = 'block';
            document.getElementById('done_fio').style.display = 'none';
            document.getElementById('err_tel').style.display = 'none';
            document.getElementById('done_tel').style.display = 'none';
            document.getElementById('err_adress').style.display = 'none';
            document.getElementById('done_adress').style.display = 'none';
            return false;
          }
          else if (!document.getElementById('tel').value)
          {
            document.getElementById('err_tel').style.display = 'block';
            document.getElementById('done_fio').style.display = 'block';
            document.getElementById('err_fio').style.display = 'none';
            document.getElementById('done_tel').style.display = 'none';
            document.getElementById('err_adress').style.display = 'none';
            document.getElementById('done_adress').style.display = 'none';
            return false;
          }
          else if (!document.getElementById('adress').value)
          {
            document.getElementById('err_adress').style.display = 'block';
            document.getElementById('done_fio').style.display = 'block';
            document.getElementById('done_tel').style.display = 'block';
            document.getElementById('done_adress').style.display = 'none';
            document.getElementById('err_fio').style.display = 'none';
            document.getElementById('err_tel').style.display = 'none';
            return false;
          }

          return true;

      };


