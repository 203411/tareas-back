const mysql = require('../database/mysql');
const Tarea = require('../entities/Tarea');

class TareasRepository {
    async getAll() {
        const sql = 'SELECT * FROM tareas';
        const rows = await mysql.query(sql);
        return rows.map((row) => new Tarea(row.id, row.titulo, row.descripcion, row.estado));
    }

    async getById(id) {
        const sql = 'SELECT * FROM tareas WHERE id = ?';
        const rows = await mysql.query(sql, [id]);
        return new Tarea(rows[0].id, rows[0].titulo, rows[0].descripcion, rows[0].estado);
    }

    async create(tarea) {
        const sql = 'INSERT INTO tareas (titulo, descripcion, estado) VALUES (?)';
        // const params = [tarea.titulo, tarea.descripcion, tarea.estado];
        // const result = mysql.query(sql, [params]);
        // tarea.id = result.insertId;
        for (let i = 0; i < tarea.length; i++) {
            const params = [tarea[i].titulo, tarea[i].descripcion, tarea[i].estado];
            const result = mysql.query(sql, [params]);
            tarea[i].id = result.insertId;
        }
        return tarea;
    }

    async update(tarea) {
        console.log(tarea);
        const sql = 'UPDATE tareas SET titulo = ?, descripcion = ?, estado = ? WHERE id = ?';
        const params = [tarea.titulo, tarea.descripcion, tarea.estado, tarea.id];
        await mysql.query(sql, params);
        return tarea;
    }

    async delete(id) {
        const sql = 'DELETE FROM tareas WHERE id = ?';
        await mysql.query(sql, [id]);
    }

        async updateAll(array) {
        const sql = 'UPDATE tareas SET titulo = ?, descripcion = ?, estado = ? WHERE id = ?';
        for (let i = 0; i < array.length; i++) {

            const params = [array[i].titulo, array[i].descripcion, array[i].estado, array[i].id];
            console.log("params");
            await mysql.query(sql, params);
        }
        return array;
    }

    async deleteAll(array) {
        const sql = 'DELETE FROM tareas WHERE id = ?';
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
            await mysql.query(sql, array[i]);
        }
    }
}

module.exports = TareasRepository;