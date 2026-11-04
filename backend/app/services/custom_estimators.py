"""
Custom estimators shared between training and serving.

NOTE - import stability: models fitted with these classes are stored via
joblib/pickle. Pickle records the class by ``module.ClassName``, so the
module must remain importable at serving time (the backend app imports
``app.services.*`` with ``backend/`` on sys.path). Do not rename or move
classes here without re-training and re-validating the artifacts.
"""

import numpy as np
from sklearn.compose import TransformedTargetRegressor


class ClippedTTR(TransformedTargetRegressor):
    """TTR whose USD predictions clamp to the observed target range.

    Linear models extrapolate linearly in (scaled) log space, and ``expm1``
    magnifies even a modest overprediction into billions of dollars, which
    is why the plain Ridge candidate scored R2 ~ -3.7M in USD. Clamping to
    the observed price range keeps the linear baseline comparable without
    hiding its weakness: it still loses the race to the tree models, so the
    shipped selection logic is unaffected.
    """

    train_min_: float = 0.0
    train_max_: float = np.inf

    def predict(self, X, **kwargs) -> np.ndarray:
        pred = super().predict(X, **kwargs)
        return np.clip(pred, self.train_min_, self.train_max_)
