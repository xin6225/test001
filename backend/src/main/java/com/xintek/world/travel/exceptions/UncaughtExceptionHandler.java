package com.xintek.world.travel.exceptions;

import java.util.concurrent.atomic.AtomicBoolean;

/**
 * handle uncaught exceptions
 */
public class UncaughtExceptionHandler implements Thread.UncaughtExceptionHandler {

    public static final AtomicBoolean outOfMemoryOccurred = new AtomicBoolean(false);

    @Override
    public void uncaughtException(Thread t, Throwable e) {
        checkOutOfMemoryError(e);
    }

    private void checkOutOfMemoryError(Throwable e) {
        if (outOfMemoryOccurred.get()) {
            return;
        }
        if (e instanceof OutOfMemoryError) {
            outOfMemoryOccurred.set(true);
        }
        if (e.getCause() != null) {
            checkOutOfMemoryError(e.getCause());
        }
    }
}
