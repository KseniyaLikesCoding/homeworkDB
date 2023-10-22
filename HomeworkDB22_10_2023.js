
В рамках БД music напишите след/запросы:
Вывести названия треков без тега test:


db.tracks.find(
    { tag: { $ne: "test" } },
    { _id: 0, name: 1 }
 )


Вывести ко-во треков с продолжительностью до одного часа с тегом new:
db.tracks.count({
    $and: [
       { duration: { $lt: 3600 } }, 
       { tag: "new" }
    ]
 })




Увеличить баланс заблокированных юзеров не из Germany на 5%:
db.users.updateMany(
    {
       is_blocked: true,
       country: { $ne: "Germany" }
    },
    {
       $mul: { balance: 1.05 } 
    }
 )





Добавить всем трекам теги fresh и popular:
db.tracks.updateMany(
    {},
    {
       $addToSet: { tags: { $each: ["fresh", "popular"] } }
    }
 )





С помощью инструмента онлайн-проектирования описать схему БД чат онлайн-поддержки
