/*
Write a class for a suffix-trie-like data structure. The class should have a "root" property set to be the root node of the trie. The class should support the creation from a string and the searching of strings.

PopulateSuffixTree:
    Time: O(n) - where n is the length of the string
    Space: O(n) - where n is the length of the string

Contains:
    Time: O(n) - where n is the length of the string
    Space: O(n) - where n is the length of the string
*/

class SuffixTrie {
    constructor(string) {
        this.root = {}
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string)
    }

    populateSuffixTrieFrom(string) {

        let stringArr = string.split(''),
            currentNode

        while (stringArr.length > 0){
            currentNode = this.root

            stringArr.forEach(letter => {
                if (!currentNode[letter]){
                    currentNode[letter] = {}
                }
                currentNode = currentNode[letter]
            })
            currentNode['*'] = true
            stringArr = stringArr.slice(1)
        }
    }

    contains(string) {

        let stringArr = string.split(''),
            currentNode = this.root

        for (let i = 0; i < stringArr.length; i++){
            if (currentNode[stringArr[i]]){
                currentNode = currentNode[stringArr[i]]
            } else {
                return false
            }
        }
        return this.endSymbol in currentNode
    }
}

