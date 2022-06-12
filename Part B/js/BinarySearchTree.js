class Node {
    constructor(initKey, initData, initParent, initLeft, initRight) {
        this.key = initKey;
        this.data = initData;
        this.parent = initParent;
        this.left = initLeft;
        this.right = initRight;
    }
};

export default class BinarySearchTree {
    constructor(initKeyLength) {
        this.root = null;
        this.size = 0;
        this.keyLength = initKeyLength;
    }

    // @todo - YOU MUST UPDATE THIS METHOD SO A KEY ONLY HAS LOWERCASE LETTERS, NO NUMBERS
    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 36);
            let randomChar;
            if (randomNum < 10) {
                randomNum += 48;
                randomChar = String.fromCharCode(randomNum);
            }
            else {
                randomNum += 55;
                randomChar = String.fromCharCode(randomNum);
            }
            key += randomChar;
        }
        return key;
    }

    putValueRecursively(key, value, testNode){
        if(key.localeCompare(testNode.key) === -1){
            if(testNode.left === undefined){
                testNode.left = new Node(key, value, testNode, undefined, undefined);
                this.size++;
                return;
            }
            else{
                this.putValueRecursively(key, value, testNode.left);
            }
        }
        else if (key.localeCompare(testNode.key) === 0){
            testNode.data = value;
        }
        else{
            if(testNode.right === undefined){
                testNode.right = new Node (key, value, testNode, undefined, undefined);
                this.size++;
                return;
            }
            else{
                this.putValueRecursively(key, value, testNode.right);
            }
        }
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, value) {
        if(this.root === null){
            this.root = new Node(key, value, undefined, undefined);
            this.size++;
            return;
        }
        this.putValueRecursively(key, value, this.root);
    }

    getValueRecursively(key, testNode){
        if(key.localeCompare(testNode.key) === -1){
            if(testNode.left === undefined){
                return null;
            }
            else {
                return this.getValueRecursively(key, testNode.left);
            }
        }
        else if(key.localeCompare(testNode.key) === 0){
            return testNode.data;
        }
        else{
            if(testNode.right === undefined){
                return null;
            }
            else{
                return this.getValueRecursively(key, testNode.right);
            }
        }
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        if(this.root === null){
            return null;
        }
        else{
            return this.getValueRecursively(key, this.root);
        }
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {

    }

    toStringRecursively(traveller, level) {
        let text = "";
        if (traveller.left != null)
            text += this.toStringRecursively(traveller.left, level+1);
        for (let i = 0; i < level; i++) {
            text += "   ";
        }
        text += "   " + traveller.data.toString() + "\n";
        if (traveller.right != null)
            text += this.toStringRecursively(traveller.right, level+1);
        return text;        
    }

    toString() {
        return this.toStringRecursively(this.root, 0);
    }
}