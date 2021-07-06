import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className="controls">
      <button
        name="good"
        type="button"
        className={s.button}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        name="neutral"
        type="button"
        className={s.button}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        name="bad"
        type="button"
        className={s.button}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}
