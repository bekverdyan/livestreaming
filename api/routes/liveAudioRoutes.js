
module.exports = function(app) {
    let liveAudioController = require('../controllers/liveAudioController');

    app.route('/playlist/:language')
        .get(liveAudioController.play_by_language);

    app.route('/play')
        .get(liveAudioController.play);

    // todoList Routes
    /*app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);*/
};