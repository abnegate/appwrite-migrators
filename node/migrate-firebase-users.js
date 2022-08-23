const appwrite = require("node-appwrite");
const firebase = require("firebase-tools");
const fs = require('fs/promises');

// Appwrite configuration
const endpoint = 'http://localhost/v1';
const appwriteProjectId = '';
const appwriteApiKey = '';

// Firebase configuration
const firebaseProjectId = '';
const base64Signer = '';
const base64SaltSeparator = '';

const client = new appwrite.Client()
    .setEndpoint(endpoint)
    .setProject(appwriteProjectId)
    .setKey(appwriteApiKey)
    .setSelfSigned()

const users = new appwrite.Users(client);

const migrate = async () => {
    const outfile = 'users.json';
    await firebase.auth.export(outfile, {project: firebaseProjectId, format: 'json'})
    const json = await fs.readFile(outfile, {encoding: 'utf8'});
    const exported = JSON.parse(json).users;

    await Promise.all(exported.map(async user => {
        await users.createScryptModifiedUser(
            'unique()',
            user.email,
            user.passwordHash,
            user.salt,
            base64SaltSeparator,
            base64Signer,
            null
        );
    }));
};

migrate()
    .then(r => console.log('Done!'))
    .catch(e => console.log(e));