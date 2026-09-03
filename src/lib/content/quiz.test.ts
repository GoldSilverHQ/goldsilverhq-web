import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { QUIZ, correctIndex, scoreLine, scoreQuiz } from "./quiz.ts";

describe("sound money quiz", () => {
  it("has exactly one correct choice per question", () => {
    for (const q of QUIZ) {
      assert.equal(q.choices.filter((c) => c.correct).length, 1, q.id);
      assert.notEqual(correctIndex(q), -1);
    }
  });

  it("scores a full set and an empty set", () => {
    const perfect = QUIZ.map((q) => correctIndex(q));
    assert.deepEqual(scoreQuiz(perfect), { correct: QUIZ.length, total: QUIZ.length });
    assert.deepEqual(
      scoreQuiz(QUIZ.map(() => null)),
      { correct: 0, total: QUIZ.length },
    );
  });

  it("returns a line for each band", () => {
    assert.match(scoreLine(8, 8), /Every stop/);
    assert.match(scoreLine(6, 8), /categories/);
    assert.match(scoreLine(4, 8), /Half/);
    assert.match(scoreLine(1, 8), /definition/);
  });
});
