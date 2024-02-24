import { ImageIcon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import styles from './FallbackImage.module.css';

export function FallbackImage() {
  return (
    <div className="size-full items-center justify-center bg-slate-100 flex">
      <ImageIcon
        className={clsx(
          styles.FallbackImageIcon,
          'font-robotoMono fill-slate-400 stroke-slate-400',
        )}
      />
    </div>
  );
}
