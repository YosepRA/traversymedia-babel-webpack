const originalName = 'Joe';

function sayHello(name = originalName) {
  return `Hello ${name} from 'lib.js'`;
}

export { originalName, sayHello };
