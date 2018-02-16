(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var count = 0;

        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {

                if (map[i][j]) {
                    if (typeof map[i + 1] !== "undefined" && map[i + 1][j]) {
                        continue
                    }
                    if (typeof map[i][j + 1] !== "undefined" && map[i][j + 1]) {
                        continue
                    }
                    count++;

                }

            }
        }
        // todo: подсчитать кол-во островов на карте
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
