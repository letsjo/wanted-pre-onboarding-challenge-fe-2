/**
 * @typedef {Object} Tag - tag type.
 * @property {string} id - tag id (reqired)
 * @property {string} name - tag name (reqired)
 */

/**
 * A Todo data type
 * @typedef {Object} Todo - Todo type
 * @property {string} id - todo id (reqired)
 * @property {string} content - todo content (reqired)
 * @property {boolean} completed - todo status (reqired)
 * @property {string} category - todo category (reqired)
 * @property {Tag[]} tags - tags string array (reqired)
 */



/**
 * A createTodo function params type.
 * @typedef {Object} CreateTodo - CreateTodo type.
 * @property {string} content - todo content (reqired)
 * @property {string} category - todo category (reqired)
 * @property {Array<string>=} tags - tags string array (optional)
 */

/**
 * A createTodo function create todo.
 * @param {CreateTodo} props content(reqired), category(reqired), tags(optional)
 * @returns {Promise<Todo>} return todo value.
 */
async function createTodo({ content, category, tags }) {}