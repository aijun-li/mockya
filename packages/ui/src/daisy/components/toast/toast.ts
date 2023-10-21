import { VNode, render, createVNode } from 'vue';
import type { BaseToast, Toast, ToastOptions, ToastPosition, ToastProps, TypedToastObj } from './types';
import { TOAST_TYPES, DEFAULT_OFFSET } from './const';
import ToastComponent from './Toast.vue';

let nextId = 0;

const instancesMap = new Map<ToastPosition, VNode[]>();

const getInstances = (position: ToastPosition) => {
  if (!instancesMap.has(position)) {
    instancesMap.set(position, []);
  }
  return instancesMap.get(position)!;
};

const close = (vmId: number, position: ToastPosition) => {
  const isTop = position.split('-')[0] === 'top';

  const instances = getInstances(position);
  const idx = instances.findIndex((vm) => vm.component?.props?.id === vmId);

  if (idx === -1) {
    return;
  }

  const vm = instances.splice(idx, 1)[0];

  if (isTop) {
    const len = instances.length;
    if (!len || idx >= len) {
      return;
    }

    const removeHeight = vm.el?.offsetHeight ?? 0;

    for (let i = idx; i < len; i++) {
      const currentInstance = instances[i];
      if (currentInstance.el && currentInstance.component) {
        const newOffset = parseInt(currentInstance.el.style.top, 10) - removeHeight;
        currentInstance.component.props.offset = newOffset;
      }
    }
  }
};

const baseToast: BaseToast = (options) => {
  const { position = 'top-center' } = options;
  const isBottom = position.split('-')[0] === 'bottom';

  const container = document.createElement('div');
  container.classList.add('toast-container');

  const instances = getInstances(position);
  let verticalOffset = DEFAULT_OFFSET;

  if (!isBottom) {
    instances.forEach((vm) => {
      verticalOffset += vm.el?.offsetHeight ?? 0;
    });
  }

  const currentId = nextId++;

  const props: ToastProps = {
    ...options,
    id: currentId,
    offset: verticalOffset,
    onClose: () => {
      close(currentId, position);
    },
    onDestroy: () => {
      render(null, container);
      container.remove();
    },
  };

  const vm = createVNode(ToastComponent, props as unknown as Record<string, unknown>);

  instances.push(vm);
  render(vm, container);
  document.body.appendChild(container);

  if (isBottom) {
    setTimeout(() => {
      const addHeight = vm.el?.offsetHeight ?? 0;
      for (let i = 0; i < instances.length - 1; i++) {
        const currentInstance = instances[i];
        if (currentInstance.el && currentInstance.component) {
          const newOffset = parseInt(currentInstance.el.style.bottom, 10) + addHeight;
          currentInstance.component.props.offset = newOffset;
        }
      }
    });
  }

  return () => {
    close(currentId, position);
  };
};

const typedToastObj: TypedToastObj = TOAST_TYPES.reduce((obj, type) => {
  obj[type] = (content: string, options?: Partial<ToastOptions>) =>
    baseToast({
      ...options,
      content,
      type,
    });
  return obj;
}, {} as TypedToastObj);

const toast: Toast = Object.assign(baseToast, typedToastObj);

export default toast;
