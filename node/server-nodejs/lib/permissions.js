class Permissions {

    static from = (
        read = [],
        write = [],
        create = [],
        update = [],
        xdelete = [],
        admin = []
    ) => {
        const permissions = [];

        if (read.length > 0) {
            permissions.push(Permissions.read(read));
        }
        if (write.length > 0) {
            permissions.push(Permissions.write(write));
        }
        if (create.length > 0) {
            permissions.push(Permissions.create(create));
        }
        if (update.length > 0) {
            permissions.push(Permissions.update(update));
        }
        if (xdelete.length > 0) {
            permissions.push(Permissions.delete(xdelete));
        }
        if (admin.length > 0) {
            permissions.push(Permissions.admin(admin));
        }

        return permissions
    }

    static read = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `read(${permissions.join(',')})`
    }

    static write = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `write(${permissions.join(',')})`
    }

    static create = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `create(${permissions.join(',')})`
    }

    static update = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `update(${permissions.join(',')})`
    }

    static delete = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `delete(${permissions.join(',')})`
    }

    static admin = (...permissions) => {
        if (permissions.length === 0) {
            throw new AppwriteException('At least one permission must be provided');
        }
        return `admin(${permissions.join(',')})`
    }
}

module.exports = Permissions;
