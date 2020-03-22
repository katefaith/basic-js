class VigenereCipheringMachine {
    constructor(isDirect) {
        if (isDirect === true || typeof isDirect === 'undefined') {
            this.isDirect = true
        } else {
            this.isDirect = false
        }
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    loopKey(message, key) {
        let loopedKey = '',
            keyIndex = 0;
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.indexOf(message[i]) < 0) {
                loopedKey += message[i]
            } else {
                loopedKey += key[keyIndex]
                keyIndex++
                if (keyIndex > key.length - 1) {
                    keyIndex = 0
                }
            }
        }
        return loopedKey
    }

    encrypt(message, key) {
        let encryptedMessage = ''
        if (typeof message === 'undefined' || typeof key === 'undefined') throw Error

        message = message.toUpperCase()
        key = this.loopKey(message, key.toUpperCase())

        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.indexOf(message[i]) >= 0) {
                const index = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i])) % this.alphabet.length
                encryptedMessage += this.alphabet[index]
            } else {
                encryptedMessage += message[i]
            }
        }

        return (this.isDirect) ? encryptedMessage : encryptedMessage.split('').reverse().join('')
    }

    decrypt(encryptedMessage, key) {
        let message = ''
        if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') throw Error

        encryptedMessage = encryptedMessage.toUpperCase()
        key = this.loopKey(encryptedMessage, key.toUpperCase())

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (this.alphabet.indexOf(encryptedMessage[i]) >= 0) {
                const index = (this.alphabet.indexOf(encryptedMessage[i]) + this.alphabet.length - this.alphabet.indexOf(key[i])) % this.alphabet.length
                message += this.alphabet[index]
            } else {
                message += encryptedMessage[i]
            }
        }

        return (this.isDirect) ? message : message.split('').reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;
