# Code Citations

## License: unknown
https://github.com/coderwurst/nodeJS/blob/3600822f18bfa9722deeccf7842dc58d1c14522a/4-natours/after-section-10/controllers/userController.js

```
, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
```


## License: unknown
https://github.com/coderwurst/nodeJS/blob/3600822f18bfa9722deeccf7842dc58d1c14522a/4-natours/after-section-06/controllers/userController.js

```
, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
```


## License: unknown
https://github.com/coderwurst/nodeJS/blob/3600822f18bfa9722deeccf7842dc58d1c14522a/4-natours/after-section-09/dev-data/data/import-dev-data.js

```
fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
```


## License: unknown
https://github.com/coderwurst/nodeJS/blob/3600822f18bfa9722deeccf7842dc58d1c14522a/4-natours/after-section-12/dev-data/data/import-dev-data.js

```
fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
```


## License: unknown
https://github.com/lmacoretta/agency_tour/blob/3c51f6e8252217f0a89105a61763bdf88e7fdfce/dev-data/data/import-dev-data.js

```
fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
```


## License: unknown
https://github.com/coderwurst/nodeJS/blob/3600822f18bfa9722deeccf7842dc58d1c14522a/4-natours/starter/dev-data/templates/accountTemplate.pug

```
.user-view
    nav.user-view__menu
      ul.side-nav
        li.side-nav--active
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-settings')
            | Settings
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-briefcase')
            | My bookings
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-star')
            | My reviews
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-credit-card')
            | Billing
      .admin-nav
        h5.admin-nav__heading Admin
        ul.side-nav
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-map')
              | Manage tours
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-users')
              | Manage users
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-star')
              | Manage reviews
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-briefcase')

    .user-view__content
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Your account settings
        form.form.form-user-data
          .form__group
            label.form__label(for='name') Name
            input#name.form__input(type='text', value='Jonas Schmedtmann', required)
          .form__group.ma-bt-md
            label.form__label(for='email') Email address
            input#email.form__input(type='email', value='admin@natours.io', required)
          .form__group.form__photo-upload
            img.form__user-photo(src='img/user.jpg', alt='User photo')
            a.btn-text(href='') Choose new photo
          .form__group.right
            button.btn.btn--small.btn--green Save settings
      .line &nbsp;
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Password change
        form.form.form-user-settings
          .form__group
            label.form__label(for='password-current') Current password
            input#password-current.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group
            label.form__label(for='password') New password
            input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.ma-bt-lg
            label.form__label(for='password-confirm') Confirm password
            input#password-confirm.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.right
            button.btn.btn--small.btn
```


## License: unknown
https://github.com/superwo/Natours-node/blob/6c962bf1cbc38961c755f99e67aecb637b1c9e58/views/account.pug

```
.user-view
    nav.user-view__menu
      ul.side-nav
        li.side-nav--active
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-settings')
            | Settings
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-briefcase')
            | My bookings
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-star')
            | My reviews
        li
          a(href='#')
            svg
              use(xlink:href='img/icons.svg#icon-credit-card')
            | Billing
      .admin-nav
        h5.admin-nav__heading Admin
        ul.side-nav
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-map')
              | Manage tours
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-users')
              | Manage users
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-star')
              | Manage reviews
          li
            a(href='#')
              svg
                use(xlink:href='img/icons.svg#icon-briefcase')

    .user-view__content
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Your account settings
        form.form.form-user-data
          .form__group
            label.form__label(for='name') Name
            input#name.form__input(type='text', value='Jonas Schmedtmann', required)
          .form__group.ma-bt-md
            label.form__label(for='email') Email address
            input#email.form__input(type='email', value='admin@natours.io', required)
          .form__group.form__photo-upload
            img.form__user-photo(src='img/user.jpg', alt='User photo')
            a.btn-text(href='') Choose new photo
          .form__group.right
            button.btn.btn--small.btn--green Save settings
      .line &nbsp;
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Password change
        form.form.form-user-settings
          .form__group
            label.form__label(for='password-current') Current password
            input#password-current.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group
            label.form__label(for='password') New password
            input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.ma-bt-lg
            label.form__label(for='password-confirm') Confirm password
            input#password-confirm.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.right
            button.btn.btn--small.btn
```


## License: unknown
https://github.com/willltns/nodejs-natours/blob/f999d7c026f9343f10c00b9af30c1d8504ad073f/notes.md

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: MIT
https://github.com/omofolarin/express-nodejs-boilerplate/blob/93e767e5742e1085f760294d8063342e14f2d4b6/.eslintrc

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: unknown
https://github.com/winay05/Natours/blob/b2f93d62b02b24a9230a68b2798abfc7ca8fc5e6/.eslintrc.js

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: GPL-3.0
https://github.com/OwenRay/Remote-MediaServer/blob/c060fb2ddf267336913588098a9d1313f34e9da3/backend/.eslintrc

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: unknown
https://github.com/anujsinha1188/anujsinha1188.github.io/blob/533f1aed18828b18934c06d42130e773265bfd02/nodejs/02_Introduction_to_Expressjs/01_Development_Environment_Demo/myApp/.eslintrc.js

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: unknown
https://github.com/RodolfoFrias/chat-backend/blob/6d32ea78a380ae1e42dd6aef10f5215a29353640/.eslintrc.js

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```


## License: unknown
https://github.com/silvestrevivo/node-natours/blob/ad7dbcd8ce80d98f4f8e57ec07a38e0fd45d5033/.eslintrc

```
", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "node/no-unsupported-features/es-syntax": ["error"
```

