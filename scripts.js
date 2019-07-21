/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

  0
 / \
1   0
   / \
  1   0
 / \
1   1

//Note to self... there might be a typo above?  Instead of 5 unival subtrees, I think there are only 4?  Unless you count the entire tree itself as a subtree, then that is 5.

*/

//We note that what it is really asking for is how many nodes are where the left and right are both defined as 'none'.  If you count the entire tree itself as a subtree, then the answer is how many end nodes there are plus one.

let count = 0;

class myNode {
  constructor (value, left='none', right='none') {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  subtrees() {
    if (this.left =='none' && this.right == 'none') {
      count++;
      console.log('true = ', count)
    } else {
      this.left.subtrees();
      this.right.subtrees();
    }
    return count+1;
  }

  resetCount() {
    count = 0;
    console.log('this.count =', count);
    return true;
  }
}

const root_right_left_left = new myNode(1);
const root_right_left_right = new myNode(1);
const root_right_left = new myNode(1, root_right_left_left, root_right_left_right);
const root_right_right = new myNode(0);
const root_left = new myNode(1);
const root_right = new myNode(0, root_right_left, root_right_right);
const root = new myNode(0, root_left, root_right); //Example tree

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(root));
  $('#output-section-2').text(root.subtrees());
  root.resetCount();
  });
