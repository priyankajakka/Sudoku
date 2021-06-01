var SudokuOOP = /** @class */ (function () {
    function SudokuOOP(arr) {
        if (this.sudokuBoard === undefined) {
            this.sudokuBoard = null;
        }
        if (this.totalBlanks === undefined) {
            this.totalBlanks = 0;
        }
        if (this.tempBlanks === undefined) {
            this.tempBlanks = 0;
        }
        this.sudokuBoard = (function (dims) {
            var allocate = function (dims) {
                if (dims.length === 0) {
                    return 0;
                }
                else {
                    var array = [];
                    for (var i = 0; i < dims[0]; i++) {
                        array.push(allocate(dims.slice(1)));
                    }
                    return array;
                }
            }; return allocate(dims);
        })([9, 9]);
        this.tempBlanks = 0;
        for (var i = 0; i < arr.length; ++i) {
            {
                for (var j = 0; j < arr[0].length; ++j) {
                    {
                        this.sudokuBoard[i][j] = arr[i][j];
                        if (this.sudokuBoard[i][j] === 0) {
                            ++this.totalBlanks;
                        }
                    }
                    ;
                }
            }
            ;
        }
    }
    SudokuOOP.prototype.solve = function (row, col) {
        if (col === 9) {
            ++row;
            col = 9 % col;
        }
        if (row === 9) {
            return true;
        }

        if (this.sudokuBoard[row][col] != "") {
            return this.solve(row, col + 1);
        }

        var num = 1;
        while ((num < 10)) {

            if (this.canPlace(num, row, col)) {
                this.sudokuBoard[row][col] = num;
                if (this.solve(row, col + 1) === true) {
                    return true;
                }
            }
            this.sudokuBoard[row][col] = 0;
            ++num;

        }

        return false;
    };

    SudokuOOP.prototype.print = function () {
        var myTab = document.getElementById('board');
        for (i = 0; i < myTab.rows.length; i++) {
            var objCells = myTab.rows.item(i).cells;
            for (var j = 0; j < objCells.length; j++) {
                //objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '" disabled>';
                if (i % 3 == 0) {
                    if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "toprightborders">';
                    } else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "topleftborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "topborders">';
                    }
                } else {
                    if (i == 8) {
                        if (j % 3 == 0) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "bottomleftborders">';
                        } else if (j == 8) {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "bottomrightborders">';
                        } else {
                            objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "bottomborders">';
                        }
                    }
                    else if (j % 3 == 0) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "leftborders">';
                    } else if (j == 8) {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "rightborders">';
                    } else {
                        objCells.item(j).innerHTML = '<input id="cell" type="text" ' + 'value="' + this.sudokuBoard[i][j] + '"disabled class = "borders">';
                    }
                }
            }
        }
    };

    SudokuOOP.prototype.canPlace = function (num, row, col) {
        if (this.inSubsection(num, row, col) || this.inRow(num, row) || this.inCol(num, col)) {
            return false;
        }
        return true;
    };

    SudokuOOP.prototype.inRow = function (num, row) {
        for (var i = 0; i < 9; ++i) {
            if (this.sudokuBoard[row][i] === num) {
                return true;
            }
            ;
        }
        return false;
    };

    SudokuOOP.prototype.inCol = function (num, col) {
        for (var i = 0; i < 9; ++i) {
            if (this.sudokuBoard[i][col] === num) {
                return true;
            }
            ;
        }
        return false;
    };

    SudokuOOP.prototype.inSubsection = function (num, row, col) {
        row = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(row / 3);
        row *= 3;
        col = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(col / 3);
        col *= 3;
        var r = row;
        var c = col;
        for (var i = r; i < r + 3; i++) {
            for (var j = c; j < c + 3; j++) {
                if (this.sudokuBoard[i][j] === num)
                    return true;
                ;
            }
            ;
        }
        return false;
    };
    return SudokuOOP;
}());
