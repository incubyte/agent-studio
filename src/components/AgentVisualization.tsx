import { motion } from 'framer-motion';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '600px',
    height: '600px',
    '@media (max-width: 1024px)': {
      width: '400px',
      height: '400px',
    },
    '@media (max-width: 768px)': {
      width: '280px',
      height: '280px',
    },
  },
});

export function AgentVisualization() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Core */}
        <motion.circle
          cx="200"
          cy="200"
          r="60"
          fill="url(#coreGradient)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Pulsing Ring 1 */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          stroke="#FF6B35"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulsing Ring 2 */}
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          stroke="#FF8555"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.3, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Orbital Nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
          const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);

          return (
            <g key={angle}>
              {/* Connection Line */}
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#3B82F6"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />

              {/* Node Circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="12"
                fill="url(#nodeGradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              />

              {/* Node Pulse */}
              <motion.circle
                cx={x}
                cy={y}
                r="12"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </g>
          );
        })}

        {/* Data Flow Particles */}
        {[0, 1, 2].map((index) => (
          <motion.circle
            key={`particle-${index}`}
            r="3"
            fill="#10B981"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 1,
              ease: "linear"
            }}
            style={{ offsetPath: `path("M 200 200 L ${200 + 120 * Math.cos((index * 120 * Math.PI) / 180)} ${200 + 120 * Math.sin((index * 120 * Math.PI) / 180)}")` }}
          />
        ))}

        {/* Central Icon - Abstract AI Brain */}
        <g transform="translate(200, 200)">
          {/* Brain paths */}
          <motion.path
            d="M-25,-15 Q-30,-25 -20,-30 Q-10,-35 0,-30 Q10,-35 20,-30 Q30,-25 25,-15"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.path
            d="M-25,15 Q-30,25 -20,30 Q-10,35 0,30 Q10,35 20,30 Q30,25 25,15"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.path
            d="M-25,-15 L-25,15 M25,-15 L25,15"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          <motion.circle
            cx="-12"
            cy="0"
            r="4"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
          />
          <motion.circle
            cx="12"
            cy="0"
            r="4"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          />
        </g>

        {/* Gradients */}
        <defs>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF8555" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
