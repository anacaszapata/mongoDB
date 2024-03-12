// 1. Listado de las personas que tengan 20 años de edad
db.users.find({ edad: 20 }, { nombres: 1, apellidos: 1, edad: 1 });

// 2. Listado de todas las mujeres que tengan entre 20 y 30 años de edad
db.users.find({ genero: 'M', edad: { $gt: 19, $lt: 31 } }, { nombres: 1, genero: 1, edad: 1 });

// 3. La persona con menos edad de la base de datos
db.users.find({}, { nombres: 1, edad: 1 }).sort({ edad: 1 }).limit(1);

// 4. Cuantos usuarios hay registrados en la base de datos
db.users.countDocuments();

// 5. Traer los 5 primeros usuarios de la base de datos
db.users.find().limit(5);

// 6. Traer los ultimos 10 usuarios de la base de datos
db.users.find().sort({ _id: -1 }).limit(10);

// 7. Listar usuarios que su correo finalice en .net
db.users.find({ correo: /.*\.net$/ }, { nombres: 1, correo: 1 });

// 8. Listar los usuarios que no vivan en Colombia
db.users.find({ pais: { $ne: 'colombia' } }, { nombres: 1, pais: 1 });

// 9. Listar los usuarios que no vivan en Ecuador y Panamá
db.users.find({ pais: { $nin: ['ecuador', 'panama'] } }, { nombres: 1, pais: 1 });

// 10. Cuantos usuarios son de Colombia y les gusta el Rock
db.users.countDocuments({ pais: 'colombia', musica: 'rock' });

// 11. Actualizar el género musical de todos los usuarios de la base de datos de metal a carranga
db.users.updateMany({ musica: 'metal' }, { $set: { musica: 'carranga' } });

// 12. Listado de hombres que les gusta la carranga, sean de Colombia y tengan entre 10 y 20 años de edad
db.users.find({ genero: 'H', musica: 'carranga', edad: { $gte: 10, $lte: 20 }, pais: 'colombia' }, { nombres: 1, edad: 1, genero: 1, musica: 1 });

// 13. Actualizar todos los usuarios que tengan 99 años, su nuevo género musical favorito será la carranga
db.users.updateMany({ edad: 99 }, { $set: { musica: 'carranga' } });

// 14. Listar todos los usuarios que inicien con 'A'
db.users.find({ nombres: /^A/i }, { nombres: 1 });

// 15. Listar todos los usuarios que su apellido finalice en 'Z'
db.users.find({ apellidos: /Z$/i }, { apellidos: 1 });

// 16. Actualizar los usuarios que tengan 50 años de edad, su nuevo género musical será NULL
db.users.updateMany({ edad: 50 }, { $set: { musica: '' } });

// 17. Listar todos los usuarios que su género musical sea igual a NULL
db.users.find({ musica: '' }, { nombres: 1, musica: 1 });

// 18. Cuál es el resultado de la suma de todas las edades de la base de datos
db.users.aggregate([{ $group: { _id: null, total: { $sum: '$edad' } } }]);

// 19. Cuántos usuarios tenemos registrados de Ecuador
db.users.countDocuments({ pais: 'ecuador' });

// 20. Cuántos usuarios son de Colombia y les gusta el Vallenato
db.users.countDocuments({ pais: 'colombia', musica: 'vallenato' });
