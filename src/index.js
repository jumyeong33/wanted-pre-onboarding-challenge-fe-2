/**
 * Create a new class todo
 * @class
 */
class Todo {
    id
    description
    done
    category
    tags
}
/**
 * Create a new class todoActions
 * @class
 */
class TodoActions {
    /**
     * Create a todo
     * @function create
     * @param {string=} description - The description of the Todo
     * @param {string} category - The category of the Todo
     * @param {string[]} tags - Tags of the Todo
     * @return {number} id
     */
    create(description, category, tags) {}

    /**
     * Get the todo by id
     * @function get
     * @param {number} id
     * @return {Todo}
     */
    get(id) {}
    /**
     * Get All of todos
     * @function getAll
     * @return {Todo[]}
     */
    getAll() {}
    /**
     * Update the description of the todo by id
     * @function updateDescription
     * @param {number} id
     * @param {string} description
     */
    updateDescription(id, description) {}
    /**
     * Update the category of the todo by id
     * @function updateCategory
     * @param {number} id
     * @param {string} category
     */
    updateCategory(id, category) {}
    /**
     * Update the specific tag of the todo by id and tag index
     * @function updateTag
     * @param {number} id
     * @param {number} index
     * @param {string} tag
     */
    updateTag(id, index, tag) {}
    /**
     * Change a value of the Done field as true
     * @function updateDone
     * @param {number} id
     */
    updateDone(id) {}
    /**
     * Change a value of the Done field as false
     * @function updateNotDone
     * @param {number} id
     */
    updateNotDone(id) {}
    /**
     * Delete the certain todo by id
     * @function delete
     * @param {number} id
     */
    delete(id) {}
    /**
     * Delete all todos
     * @function deleteAll
     */
    deleteAll() {}
    /**
     * Delete the certain tag of todo by id and index of tag
     * @function deleteTag
     * @param {number} id
     * @param {number} index
     */
    deleteTag(id, index) {}
    /**
     * Delete all of tags of todo by id
     * @function deleteAllTags
     * @param {number} id
     */
    deleteAllTags(id) {}
}