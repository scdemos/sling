/**
 * Accordion: each row is `question | answer`. Rows become native details/summary.
 * @param {Element} block
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [question, answer] = row.children;
    if (!question || !answer) return;
    const details = document.createElement('details');
    details.className = 'accordion-item';
    const summary = document.createElement('summary');
    summary.className = 'accordion-question';
    summary.append(...question.childNodes);
    const body = document.createElement('div');
    body.className = 'accordion-answer';
    body.append(...answer.childNodes);
    details.append(summary, body);
    row.replaceWith(details);
  });
}
