CREATE TABLE `objects` (
    `id` integer not null primary key autoincrement,
    `name` varchar(255) NOT NULL,
    `checksum` varchar(255),
    `created_at` datetime not null,
    `updated_at` datetime not null,
    CHECK (`checksum` is not null)
);
-- end
CREATE TABLE `fields` (
    `id` integer not null primary key autoincrement,
    `name` varchar(255) NOT NULL,
    `data_type` varchar(255) NOT NULL,
    `object_id` integer not null,
    `checksum` varchar(255),
    `created_at` datetime not null,
    `updated_at` datetime not null,
    foreign key(`object_id`) references `objects`(`id`) on delete CASCADE,
    CHECK (`checksum` is not null)
);