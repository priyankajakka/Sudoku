var num;
var possibleBoards = new Array();
possibleBoards[0] =
    [[3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]];
possibleBoards[1] =
    [[8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0]];
possibleBoards[2] =
    [[0, 1, 3, 4, 2, 0, 5, 0, 6],
    [0, 5, 0, 0, 8, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 4],
    [0, 0, 0, 7, 6, 4, 0, 0, 1],
    [4, 7, 9, 0, 0, 0, 6, 5, 0],
    [1, 6, 0, 0, 0, 0, 7, 4, 0],
    [0, 0, 6, 0, 4, 9, 0, 1, 5],
    [0, 0, 0, 8, 0, 1, 9, 0, 0],
    [0, 0, 1, 0, 0, 0, 4, 0, 0]];
possibleBoards[3] =
    [[9, 0, 0, 8, 5, 0, 0, 2, 0],
    [0, 8, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 9, 3, 0, 6],
    [0, 0, 0, 0, 2, 0, 4, 0, 0],
    [0, 6, 0, 0, 0, 3, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 5, 0, 0, 0, 0, 0, 0],
    [7, 2, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 4, 7, 6, 0, 0]];

solveBoard = function () {
    var b = new SudokuOOP(possibleBoards[num]);
    if (b.solve(0, 0)) {
        b.print();
    } else {
        alert("couldn't solve");
    }
};

function randomBoard() {
    num = Math.floor((Math.random() * 4));
    var arr = possibleBoards[num];
    var myTab = document.getElementById('board');
    for (i = 0; i < myTab.rows.length; i++) {
        var objCells = myTab.rows.item(i).cells;
        for (var j = 0; j < objCells.length; j++) {
            if (arr[i][j] == 0) {
                if (i % 3 == 0) {
                    if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "toprightborders">';
                    } else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "topleftborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "topborders">';
                    }
                } else {
                    if (i == 8) {
                        if (j % 3 == 0) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomleftborders">';
                        } else if (j == 8) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomrightborders">';
                        } else {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomborders">';
                        }
                    }
                    else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "leftborders">';
                    } else if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "rightborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "borders">';
                    }
                }
            } else {
                if (i % 3 == 0) {
                    if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "toprightborders">';
                    } else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "topleftborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "topborders">';
                    }
                } else {
                    if (i == 8) {
                        if (j % 3 == 0) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomleftborders">';
                        } else if (j == 8) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomrightborders">';
                        } else {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomborders">';
                        }
                    }
                    else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "leftborders">';
                    } else if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "rightborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "borders">';
                    }
                }
            }
        }
    }
}

function resetBoard() {
    var arr = possibleBoards[num];
    var myTab = document.getElementById('board');
    for (i = 0; i < myTab.rows.length; i++) {
        var objCells = myTab.rows.item(i).cells;
        for (var j = 0; j < objCells.length; j++) {
            if (arr[i][j] == 0) {
                if (i % 3 == 0) {
                    if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "toprightborders">';
                    } else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "topleftborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "topborders">';
                    }
                } else {
                    if (i == 8) {
                        if (j % 3 == 0) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomleftborders">';
                        } else if (j == 8) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomrightborders">';
                        } else {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "bottomborders">';
                        }
                    }
                    else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "leftborders">';
                    } else if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "rightborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + "" + '"class = "borders">';
                    }
                }
            } else {
                if (i % 3 == 0) {
                    if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "toprightborders">';
                    } else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "topleftborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "topborders">';
                    }
                } else {
                    if (i == 8) {
                        if (j % 3 == 0) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomleftborders">';
                        } else if (j == 8) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomrightborders">';
                        } else {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "bottomborders">';
                        }
                    }
                    else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "leftborders">';
                    } else if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "rightborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + arr[i][j] + '" disabled class = "borders">';
                    }
                }
            }
        }
    }
}

function checkErrors() {
    var output = document.getElementById("output")
    output.innerHTML = "Errors: " + '<br/>'
    for (i = 0; i < 9; i++) {
        if (checkInRow(i) == true) {
            output.innerHTML += 'Error found in row ' + (i + 1) + '<br/>';
        }
        if (checkInCol(i) == true) {
            output.innerHTML += 'Error found in col ' + (i + 1) + '<br/>';
        }
        if (i % 3 == 0) {
            for (var j = 0; j < 9; j += 3) {
                if (checkInSubsection(i, j) == true) {
                    output.innerHTML += 'Error found in subsection ' + '<br/>';
                }
            }
        }
    }
}

checkInRow = function (row) {
    var arr = new Array(9)

    var myTab = document.getElementById('board');
    var objCells = myTab.rows.item(row).cells;

    for (var num = 1; num <= 9; ++num) {
        for (var i = 0; i < arr.length; ++i) {
            arr[i] = 0;
        }
        for (var i = 0; i < 9; ++i) {
            if (objCells.item(i).childNodes[0].value == num) {
                arr[num - 1] = arr[num - 1] + 1;
            }
            if (arr[num - 1] > 1) {
                return true;
            }
            ;
        }
    }
    return false;
};

checkInCol = function (col) {
    var arr = new Array(9)

    var myTab = document.getElementById('board');

    for (var num = 1; num <= 9; ++num) {
        for (var i = 0; i < arr.length; ++i) {
            arr[i] = 0;
        }
        for (i = 0; i < myTab.rows.length; i++) {
            var objCells = myTab.rows.item(i).cells;
            if (objCells.item(col).childNodes[0].value == num) {
                arr[num - 1] = arr[num - 1] + 1;
            }
            if (arr[num - 1] > 1) {
                return true;
            }
        }
    }
    return false;
};

checkInSubsection = function (row, col) {
    var arr = new Array(9)
    var myTab = document.getElementById('board');
    row = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(row / 3);
    row *= 3;
    col = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(col / 3);
    col *= 3;
    var r = row;
    var c = col;
    for (var num = 1; num <= 9; ++num) {
        for (var i = 0; i < arr.length; ++i) {
            arr[i] = 0;
        }
        for (var i = r; i < r + 3; i++) {
            var objCells = myTab.rows.item(i).cells;
            for (var j = c; j < c + 3; j++) {
                if (objCells.item(j).childNodes[0].value == num) {
                    arr[num - 1] = arr[num - 1] + 1;
                }
                if (arr[num - 1] > 1) {
                    return true;
                }
            }
        }
    }
    return false;
};