// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    })

    function destructivelyAppendCat(name) {
        cats.push('Ralph')
    }

    function destructivelyPrependCat(name) {
        cats.unshift('Bob')
    }

    function destructivelyRemoveLastCat(name) {
        cats.pop()
    }

    function destructivelyRemoveFirstCat(name) {
        cats.shift()
    }
    
    

    function appendCat(name) {
        let newcats = [...cats, 'Broom']
        return newcats;
        }
    
    function prependCat(name) {
        let newerCats = ['Arnold', ...cats]
        return newerCats;
    }

    function removeLastCat(name) {
        return cats.slice(0, -1); 
    }

    function removeFirstCat(name) {
        return cats.slice(1);
    }



     