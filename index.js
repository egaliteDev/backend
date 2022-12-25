/**
 * ! Удаление дубликатов из массива
 */
{
  let chars = ["A", "B", "A", "C", "B"]
  let uniqueChars = [...new Set(chars)]
}

/**
 * ! Длина Set
 */
{
  let chars = ["A", "B", "A", "C", "B"]
  let uniqueCharsLength = [...new Set(chars)].size
}

/**
 * ! Проверяем строку на содержание всех букв алфавита
 * ! изменив 'abcdefghijklmnopqrstuvwxyz' изменим и проверяемые символы.
 */
{
  function isPangram(string) {
    return "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .every((x) => string.toLowerCase().includes(x))
  }
}

/**
 * ! В строке, в каждом слове будет число, отсортировать слова по возрастанию этих чисел
 */
{
  function order(words) {
    return words
      .split(" ")
      .sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/)
      })
      .join(" ")
  }
}

/**
 * 
 * @param {*} min Минимальное значение диапазона
 * @param {*} max Максимальное значение диапазона
 * @param {*} num Число для проверки
 * @returns
 * Минимальное значение диапазона если num < min; 
 * Максимальное значение диапазона если num > max
 * num если num лежит в диапазоне между min & max
 */
function minMaxRange(min, max, num) {
  return Math.max(min, Math.min(max, num))
}