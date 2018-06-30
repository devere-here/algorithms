/**
 * input array and 2d array
 * look through dependent projects -> none of these can be done first
 * do all the non-dependent projects
 * which projects had their dependencies finished? Do those
 * do that repeatedly until there are no projects left
 * if you can do a project because you cant do its dependency first return null
 * 
 * 
 * 
 * create a hashObj where key is project with dependencies and value is project its dependent on
 * for each value in the input array not in the hashObj add them  to the return arr
 * 
 * go through hashobj and add all values to output whose dependency has been added to the output
 * 
 */

// still under construction


const buildOrder = (array, dependencies) => {

    let hashObj = {}

    dependencies.forEach(dependency => {
        if (!hashObj[dependency[0]]) hashObj[dependency[0]] = [dependency[1]]

    })

}

