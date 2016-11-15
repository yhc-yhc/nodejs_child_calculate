# nodejs_child_calculate

give another way to face hight cpu calculate in nodejs

1，在 parent2child.js 中 默认创建一个有3个进程的进程池， 这些进程会轮流接受 守护进程（主进程）的命令。

2，在 parent.js 中，每次需要子进程计算时，调用下 event.map.js 中的函数名，此函数名对应的是在子进程中进行的函数。

3, 在 event.map.js 中， 写出需要子进程进行异步计算的函数。

==================================================================

    开发主在在 parent.js 和 event.map.js 两个文件中更改， parent.js主要是正常的 nodejs 进程工作的文件， 需要子进程频繁计算的写在 event.map.js 文件中，注意 parent.js 中的 flag 和 data 为必传参数， 且 flag 必须和 event.map.js 文件中的函数名 对应。

