# Домашнее задание 2

- Ознакомиться с документацией по ссылкам:
  - [устройство браузера](https://html5rocks.appspot.com/en/tutorials/internals/howbrowserswork/) и [архитектура Chrome](https://developers.google.com/web/updates/2018/09/inside-browser-part1);
  - [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/);
  - [учебник Ильи Кантора](http://learn.javascript.ru/js), в частности его разделы о [современных возможностях js](http://learn.javascript.ru/es-modern), [DOM](https://learn.javascript.ru/document).

- Реализовать приложение Messenger:
  - за основу взять каркас приложения из [https://github.com/priver/track-mail2](https://github.com/priver/track-mail2);
  - прилжение предсавляет собой окно чата, в которое можно отправлять сообщения;
  - cтилизовать форму отправки сообщений, в соответствии с [макетом](https://scene.zeplin.io/project/5b9a4b6aae5aa72171a8e5cf/screen/5b9a4b81fc8e9e51e96b6067), для позиционирования элементов формы использовать [CSS Flexbox](https://developer.mozilla.org/ru/docs/Web/CSS/flex);
  - по нажатию на кнопку сообщение сохраняется в localStorage и добавляется к списку сообщений выше;
  - сообщение должно содержать текст, имя отправителя и время отправки (формат, в котором это будет храниться в localStorage необходимо придумать самим);
  - при обновлении страницы уже "отправленные" сообщения загружаются из localStorage.
