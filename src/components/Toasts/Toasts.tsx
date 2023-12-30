import { Toast, ToastContainer } from "react-bootstrap";
import { useToast } from "../../hooks/useToast";

export default function Toasts() {
  const { toasts, removeToast } = useToast();

  return (
    <ToastContainer position="bottom-end" className="p-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast)}
          show={true}
          bg={toast.type}
          animation={true}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{toast.title}</strong>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
}
