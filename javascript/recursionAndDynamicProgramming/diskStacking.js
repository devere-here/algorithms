/*
You're given a non-empty array of arrays. Each subarray is given 3 integers and represents a disk.
These integers denote the disk's width, depth, and height respectively. You're goal is to stack up the disks
in order to maximize the total height of the stack. A disk must have a strictly smaller width, depth, and height than
the disk below it. Write a function to return an array of highest possible disk stack. With the top disk being the
first element and the bottom disk being the last element.

Time: O(n^2)
Space: O(n)

*/

const diskStacking = (disks) => {

	disks = disks.sort((disk1, disk2) => disk1[2] > disk2[2])

	let heights = [disks[0][2]],
		diskCombinations = [[disks[0]]]

	for (let i = 1; i < disks.length; i++){

		let maxHeight = disks[i][2],
			currentDiskStack = []
		for (let j = 0; j < i; j++){

			let lastIdx = diskCombinations[j].length - 1,
				topDisk = diskCombinations[j][lastIdx],
				currentHeight

			if (isDiskBigger(disks[i], topDisk)){
				currentHeight = disks[i][2] + heights[j]

				if (currentHeight > maxHeight){
					maxHeight = currentHeight
					currentDiskStack = diskCombinations[j].slice(0)
				}
			}
		}
		currentDiskStack.push(disks[i])
		heights.push(maxHeight)
		diskCombinations.push(currentDiskStack)
	}

	let finalMaxHeight = Math.max(...heights)

	return diskCombinations[heights.indexOf(finalMaxHeight)]
}


function isDiskBigger(disk1, disk2){
	for (let i = 0; i < disk1.length; i++){
		if (disk1[i] <= disk2[i]) return false
	}

	return true
}

console.log(diskStacking([[3, 3, 3], [1, 1, 5]]))  // [[1, 1, 5]]
console.log(diskStacking([[2, 1, 2], [3, 2, 3], [2, 3, 4]]))  // [[2, 1, 2], [3, 2, 3]]
