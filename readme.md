tandina-modal-content

This project contain the code of a modal you can customize and test on storybook but to use it on your project you need to install it on your project with this command

npm i tandina-modal-content

DevDepedencies

"@babel/preset-env": "^7.22.2", "@babel/preset-react": "^7.22.3", "@rollup/plugin-node-resolve": "^15.0.2", "@storybook/addon-essentials": "^7.0.18", "@storybook/addon-interactions": "^7.0.18", "@storybook/addon-links": "^7.0.18", "@storybook/blocks": "^7.0.18", "@storybook/react": "^7.0.18", "@storybook/react-webpack5": "^7.0.18", "@storybook/testing-library": "^0.0.14-next.2", "prop-types": "^15.8.1", "rollup": "^2.79.1", "rollup-plugin-babel": "^4.4.0", "rollup-plugin-peer-deps-external": "^2.2.4", "rollup-plugin-postcss": "^4.0.2", "rollup-plugin-terser": "^7.0.2", "storybook": "^7.0.18"
Available Scripts

"test": "echo "Error: no test specified" && exit 1", "storybook": "storybook dev -p 6006", "build-storybook": "storybook build", "build-lib": "rollup -c"
npm build-storybook

to create a storybook, it's will create a react project environement and automaticly start to display this projet at this adress http://localhost:6006 and allow you to test the component
npm build-lib

will minify the project in two file, one for all browsers and on es file ecma file for old browsers both version are available when you install with npm

without npm

you can also clone this project, test it with storybook before you use it

the modal content

there is two components in the project "requirements" and "ModalContent" requirements is a template of an react project, requirement equal to the parent component of "ModalContent" it's show you how to set modal content. ModalContent is your component that allow you to display a message, to close the modal and set his visibility. in requirement you need to pass with pros functions to controll the modal
